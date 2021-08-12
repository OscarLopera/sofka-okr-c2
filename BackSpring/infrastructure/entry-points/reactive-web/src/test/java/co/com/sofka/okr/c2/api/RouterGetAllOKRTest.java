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
import reactor.core.publisher.Flux;

import java.util.ArrayList;
import java.util.List;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterGetAllOKRTest {

    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("GET - Obtener todos los OKRs")

    public void getAllOKRTest(){

        List<OKRSDTO> okrsdtoList = new ArrayList<>();
        OKRSDTO okrsdto = new OKRSDTO(
                "123",
                "Título...",
                "Frank Saenz",
                "Descripción..."
        );

        okrsdtoList.add(okrsdto);

        RespuestaUsuarioDTO respuestaUsuarioDTO1 = new RespuestaUsuarioDTO(
                "1",
                "Cristian",
                okrsdtoList
        );

        RespuestaUsuarioDTO respuestaUsuarioDTO2 = new RespuestaUsuarioDTO(
                "2",
                "Cristian",
                new ArrayList<>()
        );

        Mockito.when(handler.findAllUserOKR()).thenReturn(Flux.just(respuestaUsuarioDTO1, respuestaUsuarioDTO2));

        webTestClient.get().uri("/api/get/all")
                .exchange()
                .expectStatus().isOk()
                .expectBodyList(RespuestaUsuarioDTO.class)
                .value(respuesta ->{
                    Assertions.assertThat(respuesta.get(0).getId()).isEqualTo(respuestaUsuarioDTO1.getId());
                    Assertions.assertThat(respuesta.get(1).getId()).isEqualTo(respuestaUsuarioDTO2.getId());
                });
    }
}
