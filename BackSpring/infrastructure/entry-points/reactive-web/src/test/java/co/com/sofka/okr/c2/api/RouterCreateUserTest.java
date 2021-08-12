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
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterCreateUserTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Create user")
    public void createUser(){
        UsuarioDTO usuarioDTO = new UsuarioDTO("1","Diego Urrego","diego@mail.com","http/:hajsdh", "3222239208",true,"DEV","super usuario");
        Mockito.when(handler.createUser(Mockito.any(UsuarioDTO.class))).thenReturn(Mono.just(usuarioDTO));
        webTestClient.post()
                .uri("/api/usuario/crear")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(usuarioDTO), UsuarioDTO.class)
                .exchange()
                .expectStatus()
                .isOk()
                .expectBody(UsuarioDTO.class)
                .value(response -> {
                    Assertions.assertThat(response.getId()).isEqualTo("1");
                    Assertions.assertThat(response.getEmail()).isEqualTo("diego@mail.com");
                    Assertions.assertThat(response.getName()).isEqualTo("Diego Urrego");
                    Assertions.assertThat(response.getUrlPhoto()).isEqualTo("http/:hajsdh");
                    Assertions.assertThat(response.getPhone()).isEqualTo("3222239208");
                    Assertions.assertThat(response.getFirstTime()).isEqualTo(true);
                    Assertions.assertThat(response.getVerticalId()).isEqualTo("DEV");
                    Assertions.assertThat(response.getRol()).isEqualTo("super usuario");
                });
    }
}
