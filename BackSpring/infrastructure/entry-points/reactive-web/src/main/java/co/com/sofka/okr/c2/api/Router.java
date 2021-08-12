package co.com.sofka.okr.c2.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import org.springframework.http.ResponseEntity;

import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;


@Configuration
public class Router {


    @Bean
    public RouterFunction<ServerResponse> createUser(Handler handler) {
        return route(POST("/api/usuario/crear").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UsuarioDTO.class)
                        .flatMap(usuarioDTO -> handler.createUser(usuarioDTO)
                                .flatMap(result -> ServerResponse.ok()
                                        .contentType(MediaType.APPLICATION_JSON)
                                        .bodyValue(result))
                        )
        );
    }

    @Bean
    public RouterFunction<ServerResponse> routerGetAllVerticals(Handler handler) {
        return route(
                GET("/api/usuario/verticales").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(handler.getVertical(), VerticalDTO.class))
        );

    }


    @Bean
    public RouterFunction<ServerResponse> consultVertical(Handler handler){
        return route(GET("/api/vertical/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(VerticalDTO.class)
                        .flatMap(verticalDTO-> handler.findVerticalById(request.pathVariable("id"))
                                .flatMap(result -> ServerResponse.ok()
                                        .contentType(MediaType.APPLICATION_JSON)
                                        .bodyValue(result)))
                        .onErrorResume(error -> {
                            if(error instanceof IllegalAccessError){
                                return ServerResponse.badRequest().bodyValue("vertical no existe");
                            }
                            return ServerResponse.badRequest().build();
                        }));


    }

    @Bean
    public RouterFunction<ServerResponse> consultUser(Handler handler) {
        return route(GET("/api/usuario/validar/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .body(handler.validarUsuario(request.pathVariable("id")), RespuestaLoginDTO.class)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> UpdateUser(Handler handler) {
        return route(PUT("/api/usuario/modificar").and(accept(MediaType.APPLICATION_JSON)),
                request -> request.bodyToMono(UsuarioDTO.class)
                        .flatMap(usuarioDTO -> handler.updateUser(usuarioDTO)
                                .flatMap(result -> ServerResponse.ok()
                                        .contentType(MediaType.APPLICATION_JSON)
                                        .bodyValue(result)))
                        .onErrorResume(error -> {
                            if(error instanceof IllegalAccessError){
                                return ServerResponse.badRequest().bodyValue("Usuario no existe");
                            }
                            return ServerResponse.badRequest().build();
                        })
        );
    }


    @Bean
    public RouterFunction<ServerResponse> routerGetPreguntas(Handler handler) {
        return route(
                GET("/api/preguntas/frecuentes").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(handler.listPreguntas(), PreguntasDTO.class))
        );
    }

    @Bean
    public RouterFunction<ServerResponse> getOKRById(Handler handler) {
        return route(GET("/api/getokrbyid/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getOkrBiId(request.pathVariable("id")), OKRSDTO.class));
    }
    @Bean
    public RouterFunction<ServerResponse> getUserOKR(Handler handler) {
        return route(GET("/api/get/userokr/{id}").and(accept(MediaType.APPLICATION_JSON)),
            request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
            .body(handler.findUserAllOkr(request.pathVariable("id")),RespuestaUsuarioDTO.class));
    }

    @Bean
    public RouterFunction<ServerResponse> getAllUserOKR(Handler handler){
        return route(GET("/api/get/all").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(handler.findAllUserOKR(), RespuestaUsuarioDTO.class)));
    }

    @Bean
    public RouterFunction<ServerResponse> getOKRCompleted(Handler handler){
        return route(GET("/api/get/completed/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getCompleted(request.pathVariable("id")), OKRSDTO.class));


    }

    @Bean
    public RouterFunction<ServerResponse> getOKRProgress(Handler handler){
        return route(GET("/api/get/progress/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getProgress(request.pathVariable("id")),OKRSDTO.class));
    }

    @Bean
    public  RouterFunction<ServerResponse> getAllOKRByUserId(Handler handler){
        return route(GET("/api/getokrbyuserid/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getAllOkrsByUser(request.pathVariable("id")), OKRSDTO.class));
    }

    @Bean
    public  RouterFunction<ServerResponse> getLastOKRByUserId(Handler handler){
        return route(GET("/api/getlastokrbyuserid/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getLastOkr(request.pathVariable("id")), OKRSDTO.class));
    }
}
