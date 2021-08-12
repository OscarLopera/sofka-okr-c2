package co.com.sofka.okr.c2.api;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterGetValidateUserTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Test validar usuario")
    public void getValidateUser(){

        UsuarioDTO usuarioDTO = new UsuarioDTO("1","daniel","daniel@gmail.com",
                "http//foto","23423",true,"1","Super usuario");
        RespuestaLoginDTO respuestaLoginDTO = new RespuestaLoginDTO(true,null);

        Mockito.when(handler.validarUsuario(usuarioDTO.getIdUser())).thenReturn(Mono.just(respuestaLoginDTO));

        webTestClient.get()
                .uri("/api/usuario/validar/{id}", "1")
                .exchange()
                .expectStatus().isOk()
                .expectBody(RespuestaLoginDTO.class)
                .value(response->{
                    Assertions.assertThat(response.getFirstTime()).isEqualTo(true);
                });

    }
}
