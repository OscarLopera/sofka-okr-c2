package co.com.sofka.okr.c2.api;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})

public class RouterUpdateUserTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Modificar usuario")
    public void updateUser(){

        UsuarioDTO usuarioDTO = new UsuarioDTO("1","daniel","daniel@gmail.com",
                "http//foto","23423",true,"1","Super usuario");

        Mockito.when(handler.updateUser(Mockito.any(UsuarioDTO.class))).thenReturn(Mono.just(usuarioDTO));

        webTestClient.put()
                .uri("/api/usuario/modificar")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(usuarioDTO), UsuarioDTO.class)
                .exchange()
                .expectStatus().isOk()
                .expectBody(UsuarioDTO.class)
                .value(response->{
                    Assertions.assertThat(response.getIdUser()).isEqualTo("1");
                });

    }

}
