package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.usecase.okr.*;
import co.com.sofka.okr.c2.usecase.usuario.GetAllUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetUserOKRUseCase;
import co.com.sofka.okr.c2.model.okrs.KRS;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class Handler {

    private final MapperOKRDTO mapperOKRDTO;
    private final MapperUserDTO mapperUserDTO;
    private final GetOkrByIdUseCase getOkrByIdUseCase;
    private final GetAllKrsByIdOkrUseCase getAllKrsByIdOkrUseCase;
    private final GetUserOKRUseCase getUserOKRUseCase;
    private final GetAllOKRByUserUseCase getAllOKRByUserUseCase;
    private final GetAllUserUseCase getAllUserUseCase;
    private final GetAllOkrsByUserIdUseCase getAllOkrsByUserIdUseCase;
    private final GetLastOkrUseCase getLastOkrUseCase;

    public Mono<OKRSDTO> getOkrBiId(String id) {
        Mono<OKRSDTO> okr = getOkrByIdUseCase.execute(id).map(mapperOKRDTO.okrToDto());
        Flux<OKRSDTO> response = getAllKrsByIdOkrUseCase.execute(id).defaultIfEmpty(new KRS()).buffer().flatMap(it -> okr.flatMap(list -> {
            if(it.get(0).getIdOkr() == null){
                list.setKrs(new ArrayList<>());
            }else{
                list.setKrs(it.stream().map(mapperOKRDTO.krToDto()).collect(Collectors.toList()));
            }
            return Mono.just(list);
        }));
        return response.next();
    }

    public Mono<RespuestaUsuarioDTO> findUserAllOkr(String id){
        Mono<RespuestaUsuarioDTO> user = getUserOKRUseCase.execute(id).map(mapperUserDTO.userResponseToDTO());
        Flux<RespuestaUsuarioDTO> response = getAllOKRByUserUseCase.execute(id).buffer()
                .flatMap(it -> user.flatMap(okr -> {
                    okr.setOkrs(it);
                    val okr2 = okr;
                    return Mono.just(okr2);
                }));
        return response.next();
    }


    public Flux<RespuestaUsuarioDTO> findAllUserOKR(){
        return getAllUserUseCase.execute().map(mapperUserDTO.userResponseToDTO())
                .flatMap(us ->
                        findUserAllOkr(us.getId()));
    }

    public Flux<OKRSDTO> getAllOkrsByUser(String idUser){
        return getAllOkrsByUserIdUseCase.execute(idUser).map(mapperOKRDTO.okrToDto());
    }

    public Mono<OKRSDTO> getLastOkr(String id){
        return getLastOkrUseCase.execute(id).map(mapperOKRDTO.okrToDto()).defaultIfEmpty(new OKRSDTO()).last();
    }

}
