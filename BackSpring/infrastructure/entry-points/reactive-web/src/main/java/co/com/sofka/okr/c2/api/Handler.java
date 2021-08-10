package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.ListUserUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class Handler {
//private  final UseCase useCase;c
//private  final UseCase2 useCase2;
    private final CreateUserUseCase createUserUseCase;
    private final ListUserUseCase listUserUseCase;
    private MapperRespuestaLoginDTO respuesta = new MapperRespuestaLoginDTO();
    private MapperUserDTO mapperUserDTO = new MapperUserDTO();

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
}
