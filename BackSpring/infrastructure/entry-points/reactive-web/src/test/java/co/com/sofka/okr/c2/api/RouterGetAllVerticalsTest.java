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
public class RouterGetAllVerticalsTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Get verticals")
    public void getVerticals(){
        VerticalDTO verticalDTO = new VerticalDTO("1","QA");
        Mockito.when(handler.getVertical()).thenReturn(Flux.just(verticalDTO));
        webTestClient.get()
                .uri("/api/usuario/verticales")
                .exchange()
                .expectStatus()
                .isOk()
                .expectBodyList(VerticalDTO.class)
                .value(response -> {
                    Assertions.assertThat(response.get(0).getId()).isEqualTo("1");
                });
    }
}
