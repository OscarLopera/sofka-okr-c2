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
import reactor.core.publisher.Flux;

import java.util.ArrayList;
import java.util.List;

@WebFluxTest
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {Router.class})
public class RouterGetOKRProgressTest {

    @Autowired
    private WebTestClient webTestClient;

    @MockBean
    private Handler handler;

    @Test
    @DisplayName("GET - Obtener OKRs en progreso")

    public void getOKRProgressTest(){

        List<HistoricalProgress> list = new ArrayList<>();
        HistoricalProgress hp1 = new HistoricalProgress("2021/08/10", 20.0);
        list.add(hp1);
        List<KRDTO> krsdtoList = new ArrayList<>();
        KRDTO kr = new KRDTO("id", "idokr", "title", "descripcion", "manager name", "manager@gamil.com", "2021/8/10", "2021/10/10", 50.0, 70.0);
        krsdtoList.add(kr);

        List<OKRSDTO> okrsdtoList = new ArrayList<>();
        OKRSDTO okrsdto1 = new OKRSDTO(
                "id7",
                "objective",
                "titulo",
                "IdManager",
                "descripcion",
                "verticaID",
                70.0,
                new ArrayList<>(),
                krsdtoList);

        OKRSDTO okrsdto2 = new OKRSDTO(
                "id8",
                "objective2",
                "titulo2",
                "IdManager2",
                "descripcion2",
                "verticaID2",
                70.0,
                new ArrayList<>(),
                krsdtoList);

        okrsdtoList.add(okrsdto1);
        okrsdtoList.add(okrsdto2);

        Mockito.when(handler.getProgress(Mockito.any(String.class))).thenReturn(Flux.just(okrsdto1, okrsdto2));

        webTestClient.get().uri("/api/get/progress/{id}", "id")
                .exchange()
                .expectStatus().isOk()
                .expectBodyList(OKRSDTO.class)
                .value(respuesta ->{
                    Assertions.assertThat(respuesta.get(0).getCurrentProgress()).isEqualTo(okrsdto1.getCurrentProgress());
                    Assertions.assertThat(respuesta.get(1).getCurrentProgress()).isEqualTo(okrsdto2.getCurrentProgress());
                });


    }
}