package co.com.sofka.okr.c2.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;

import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

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
    public RouterFunction<ServerResponse> consultVertical(Handler handler) {
        return route(GET("/api/vertical/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok()
                        .contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(handler.findVerticalById(request.pathVariable("id")), VerticalDTO.class))
        );
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
                                        .bodyValue(result))
                        )
        );
    }

}
