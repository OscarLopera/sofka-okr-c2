package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.usecase.okr.GetAllOKRByUserUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOKRByCompletedUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetAllUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetUserOKRUseCase;
import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.usecase.okr.GetAllKrsByIdOkrUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOkrByIdUseCase;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;
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
    private final GetOKRByCompletedUseCase getOKRByCompletedUseCase;

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
                    okr.setOkrs(it.stream().map(mapperOKRDTO.okrToDto()).collect(Collectors.toList()));
                    val okr2 = okr;
                    return Mono.just(okr2);
                }));
        return response.next();
    }


    public Flux<RespuestaUsuarioDTO> findAllUserOKR(){
        Flux<RespuestaUsuarioDTO> users = getAllUserUseCase.execute().map(mapperUserDTO.userResponseToDTO())
                .flatMap(us ->
                        findUserAllOkr(us.getId()));
        return users;
    }

    public Flux<OKRSDTO> getCompleted(String id){
        Flux<OKRSDTO> okrs = getOKRByCompletedUseCase.execute(id).map(mapperOKRDTO.okrToDto());
        return okrs;
    }
}
