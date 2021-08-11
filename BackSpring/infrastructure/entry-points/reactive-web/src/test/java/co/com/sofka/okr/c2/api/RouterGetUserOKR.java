package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.values.HistoricalProgress;
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

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterGetUserOKR {

    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("GET - Obtener OKRs por usuario")

    public void getUserOKRTest() {

        List<HistoricalProgress> list = new ArrayList<>();
        HistoricalProgress hp1 = new HistoricalProgress("2021/08/10", 20.0);
        list.add(hp1);
        List<KRDTO> krsdtoList = new ArrayList<>();
        KRDTO kr = new KRDTO("id", "idokr", "title", "descripcion", "manager name", "manager@gamil.com", "2021/8/10", "2021/10/10", 50.0, 25.0);
        krsdtoList.add(kr);
        OKRSDTO okr = new OKRSDTO("id7", "objective", "titulo", "IdManager", "descripcion", "verticaID", 95.2, new ArrayList<>(), krsdtoList);

        RespuestaUsuarioDTO respuestaUsuarioDTO = new RespuestaUsuarioDTO(
                "1",
                "Cristian",
                Collections.singletonList(okr)
        );

        Mockito.when(handler.findUserAllOkr(Mockito.any(String.class))).thenReturn(Mono.just(respuestaUsuarioDTO));

        webTestClient.get().uri("/api/get/userokr/{id}", "id")
                .exchange()
                .expectStatus().isOk()
                .expectBody(RespuestaUsuarioDTO.class)
                .value(respuesta -> {
                    Assertions.assertThat(respuesta.getName()).isEqualTo("Cristian");
                });
    }
}