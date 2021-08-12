package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;

import co.com.sofka.okr.c2.usecase.vertical.ListVerticalUseCase;
import co.com.sofka.okr.c2.usecase.vertical.VerticalUseCase;

import co.com.sofka.okr.c2.usecase.usuario.ListUserUseCase;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class Handler {
//private  final UseCase useCase;c
//private  final UseCase2 useCase2;
    private final CreateUserUseCase createUserUseCase;
    private final ListUserUseCase listUserUseCase;
    private final ListVerticalUseCase listVerticalUseCase;
    private MapperRespuestaLoginDTO respuesta = new MapperRespuestaLoginDTO();
    private MapperUserDTO mapperUserDTO = new MapperUserDTO();
    private  MapperVerticalDTO mapperVerticalDTO=new MapperVerticalDTO();

    private  final VerticalUseCase verticalUseCase;

    public Mono<ServerResponse> listenGETUseCase(ServerRequest serverRequest) {
        // usecase.logic();
        return ServerResponse.ok().body("", String.class);
    }

    public Mono<ServerResponse> listenGETOtherUseCase(ServerRequest serverRequest) {
        // useCase2.logic();
        return ServerResponse.ok().body("", String.class);
    }

    public Mono<ServerResponse> listenPOSTUseCase(ServerRequest serverRequest) {
        // usecase.logic();
        return ServerResponse.ok().body("", String.class);
    }

    public Mono<UsuarioDTO> createUser(UsuarioDTO usuarioDTO){
        Mono<UsuarioDTO> user = createUserUseCase.execute(mapperUserDTO.UserToDTO().apply(usuarioDTO))
                .map(mapperUserDTO.toDTO());
        return user;
    }

    public Mono<VerticalDTO> findVerticalById(String id) {
        return listVerticalUseCase.listVertical(id)
                .map(mapperVerticalDTO.toVerticalDTO())
                .switchIfEmpty(Mono.error(new IllegalAccessError()));
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
        Mono<UsuarioDTO> user = createUserUseCase.execute(mapperUserDTO.UserToDTO().apply(usuarioDTO))
                .map(mapperUserDTO.toDTO());
        return user;
    }


}
