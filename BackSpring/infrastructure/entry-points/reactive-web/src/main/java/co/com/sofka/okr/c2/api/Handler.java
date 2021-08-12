package co.com.sofka.okr.c2.api;


import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.usecase.preguntas.ListPreguntasUseCase;
import co.com.sofka.okr.c2.usecase.usuario.*;

import co.com.sofka.okr.c2.usecase.vertical.ListVerticalUseCase;
import co.com.sofka.okr.c2.usecase.vertical.VerticalUseCase;


import co.com.sofka.okr.c2.usecase.okr.*;
import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.usecase.okr.GetAllKrsByIdOkrUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOkrByIdUseCase;

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

//private  final UseCase useCase;c
//private  final UseCase2 useCase2;
    private final CreateUserUseCase createUserUseCase;
    private final ListUserUseCase listUserUseCase;
    private final ListVerticalUseCase listVerticalUseCase;
    private final ListPreguntasUseCase listPreguntasUseCase;
    private final UpdateUserUseCase updateUserUseCase;
    private final MapperRespuestaLoginDTO respuesta;
    private final MapperUserDTO mapperUserDTO;
    private final MapperVerticalDTO mapperVerticalDTO;
    private final MapperPreguntasDTO mapperPreguntasDTO ;
    private  final VerticalUseCase verticalUseCase;


    private final MapperOKRDTO mapperOKRDTO;
    private final GetOkrByIdUseCase getOkrByIdUseCase;
    private final GetAllKrsByIdOkrUseCase getAllKrsByIdOkrUseCase;
    private final GetUserOKRUseCase getUserOKRUseCase;
    private final GetAllOKRByUserUseCase getAllOKRByUserUseCase;
    private final GetAllUserUseCase getAllUserUseCase;
    private final GetOKRByCompletedUseCase getOKRByCompletedUseCase;
    private final GetOKRByProgressUseCase getOKRByProgressUseCase;
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
                    okr.setOkrs(it.stream().map(mapperOKRDTO.okrToDto()).collect(Collectors.toList()));
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

    public Flux<OKRSDTO> getCompleted(String id){
        Flux<OKRSDTO> okrs = getOKRByCompletedUseCase.execute(id).map(mapperOKRDTO.okrToDto());
        return okrs;
    }

    public Flux<OKRSDTO> getProgress(String id){
        Flux<OKRSDTO> okrs = getOKRByProgressUseCase.execute(id).map(mapperOKRDTO.okrToDto());
        return okrs;
    }


    public Mono<UsuarioDTO> createUser(UsuarioDTO usuarioDTO){
        Mono<UsuarioDTO> user = createUserUseCase.execute(mapperUserDTO.UserToDTO().apply(usuarioDTO))
                .map(mapperUserDTO.toDTO());
        return user;
    }

    public Mono<VerticalDTO> findVerticalById(String id) {
        return listVerticalUseCase.listVertical(id).map(mapperVerticalDTO.toVerticalDTO())
                .switchIfEmpty(Mono.just(new VerticalDTO())).map(respuestaVertical->{
                    if(respuestaVertical.getId()==null){
                        respuestaVertical.setId("-1");
                        respuestaVertical.setVerticalname("Sin vertical asociada");
                    }
                    return respuestaVertical;
                });
    }

    public Flux<VerticalDTO> getVertical() {
        return verticalUseCase.execute().map(mapperVerticalDTO.toVerticalDTO());
    }

    public Mono<RespuestaLoginDTO> validarUsuario(String id){
        Mono<RespuestaLoginDTO> resp = listUserUseCase.execute(id).map(respuesta.toDTOTrue())
                .switchIfEmpty(Mono.just(new RespuestaLoginDTO())).map(respuestaLoginDTO->{
                    if (respuestaLoginDTO.getVerticalId()==null){
                        respuestaLoginDTO.setFirstTime(true);
                        respuestaLoginDTO.setVerticalId(null);
                    }
                        return respuestaLoginDTO;
                });
        return resp;

    }

    public Mono<UsuarioDTO> updateUser(UsuarioDTO usuarioDTO){

        Mono<UsuarioDTO> user = updateUserUseCase.execute(mapperUserDTO.UserToDTO().apply(usuarioDTO)).map(mapperUserDTO.toDTO());

        return user;
    }

    public Flux<PreguntasDTO> listPreguntas(){
        Flux<PreguntasDTO> preguntas = listPreguntasUseCase.execute().map(mapperPreguntasDTO.toDTO());
        return preguntas;
    }



    public Mono<OKRSDTO> getLastOkr(String id){
        return getLastOkrUseCase.execute(id).last().flatMap(list->{
            if (list.getId()== null){
                return Mono.just(new OKRSDTO());
            }
            Mono<OKRSDTO> response = getAllKrsByIdOkrUseCase.execute(list.getId().getValue()).buffer().flatMap(it ->{
                if (it.get(0).getIdOkr() == null) {
                    list.setKrs(new ArrayList<>());
                } else {
                    list.setKrs(it);
                }
                return Mono.just(list);
            }).next().map(mapperOKRDTO.okrsToOkrDto());
            return response;
        });
    }

}
