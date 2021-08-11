package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.gateways.KRSRepository;
import co.com.sofka.okr.c2.model.okrs.values.Description;
import co.com.sofka.okr.c2.model.okrs.values.IdOkr;
import co.com.sofka.okr.c2.model.okrs.values.KRId;
import co.com.sofka.okr.c2.model.okrs.values.Title;
import co.com.sofka.okr.c2.model.usuarios.values.Email;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

import static org.mockito.Mockito.when;


@SpringBootTest(classes = GetAllKrsByIdOkrUseCase.class)
class GetAllKrsByIdOkrUseCaseTest {

    @MockBean
    KRSRepository krsRepository;

    @SpyBean
    GetAllKrsByIdOkrUseCase getAllKrsByIdOkrUseCase;

    @Test
    public void getKRByOKR() {

        KRS krs = new KRS(
                KRId.of("1"),
                IdOkr.of("12"),
                Title.of("Esto es un test"),
                Description.of("Aca vamos"),
                "Los tesos",
                Email.of("estova@estarfacil.com"),
                "10/08/2021",
                "11/08/2021",
                20.0,
                50.0
        );

        KRS krs2 = new KRS(
                KRId.of("134"),
                IdOkr.of("12"),
                Title.of("Esto es un test parte 2"),
                Description.of("Aca vamos otra vez"),
                "Los tesos",
                Email.of("estova@estarfacil.com"),
                "10/08/2021",
                "11/08/2021",
                30.0,
                70.0
        );

        when(krsRepository.listKr(krs.getIdOkr().getValue())).thenReturn(Flux.just(krs,krs2));

        Flux<KRS> result = getAllKrsByIdOkrUseCase.execute(krs.getIdOkr().getValue());

        Assertions.assertEquals("12", result.blockFirst().getIdOkr().getValue());
        Assertions.assertEquals("1", result.blockFirst().getKrId().getValue());

    }

}