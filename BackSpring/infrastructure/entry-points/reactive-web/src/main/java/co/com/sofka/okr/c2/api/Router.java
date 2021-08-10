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
    public RouterFunction<ServerResponse> getOKRById(Handler handler) {
        return route(GET("/api/getokrbyid/{id}").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(handler.getOkrBiId(request.pathVariable("id")), OKRSDTO.class));

    @Bean
    public RouterFunction<ServerResponse> getUserOKR(Handler handler) {
        return route(GET("/api/get/userokr/{id}").and(accept(MediaType.APPLICATION_JSON)),
            request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
            .body(handler.findUserAllOkr(request.pathVariable("id")),RespuestaUsuarioDTO.class));
    }

    @Bean
    public RouterFunction<ServerResponse> getAllUserOKR(Handler handler){
        return route(GET("api/get/all").and(accept(MediaType.APPLICATION_JSON)),
                request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromPublisher(handler.findAllUserOKR(), RespuestaUsuarioDTO.class)));
    }

}
