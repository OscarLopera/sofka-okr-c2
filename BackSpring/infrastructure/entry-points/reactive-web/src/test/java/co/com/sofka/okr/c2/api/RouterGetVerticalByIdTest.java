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
import reactor.core.publisher.Mono;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterGetVerticalByIdTest {
    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("Get verticals by Id")
    public void getVerticalById(){
        VerticalDTO verticalDTO = new VerticalDTO("1","QA");
        Mockito.when(handler.findVerticalById(verticalDTO.getId())).thenReturn(Mono.just(verticalDTO));
        webTestClient.get()
                .uri("/api/vertical/{id}", "1")
                .exchange()
                .expectStatus()
                .isOk()
                .expectBody(VerticalDTO.class)
                .value(response -> {
                    Assertions.assertThat(response.getId()).isEqualTo("1");
                });
    }
}
