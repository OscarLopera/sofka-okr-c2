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

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})

public class RoterGetQuestionsTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Traer preguntas")
    public void getQuestions(){

        PreguntasDTO preguntasDTO = new PreguntasDTO("1","¿que fue primero?","El huevo");

        Mockito.when(handler.listPreguntas()).thenReturn(Flux.just(preguntasDTO));

        webTestClient.get()
                .uri("/api/preguntas/frecuentes")
                .exchange()
                .expectStatus().isOk()
                .expectBodyList(PreguntasDTO.class)
                .value(response->{
                    Assertions.assertThat(response.get(0).getId()).isEqualTo("1");
                });

    }
}
