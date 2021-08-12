package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.model.okrs.values.Description;
import co.com.sofka.okr.c2.model.okrs.values.IdOkr;
import co.com.sofka.okr.c2.model.okrs.values.Objective;
import co.com.sofka.okr.c2.model.okrs.values.Title;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;

import java.util.Objects;

import static org.mockito.Mockito.when;

@SpringBootTest(classes = GetOKRByCompletedUseCase.class)
class GetOKRByCompletedUseCaseTest {

    @MockBean
    OKRSRepository okrsRepository;

    @SpyBean
    GetOKRByCompletedUseCase getOKRByCompletedUseCase;

    @Test
    public void getOKRCompleted() {
        OKRS okrs = new OKRS(
                IdOkr.of("1"),
                Objective.of("Primer test"),
                Title.of("Si se puede"),
                "14",
                Description.of("Estamos en eso"),
                VerticalId.of("21"),
                100.0
        );

        when(okrsRepository.findByCompleted(okrs.getManagerId())).thenReturn(Flux.just(okrs));

        Flux<OKRS> result = getOKRByCompletedUseCase.execute("14");
        Assertions.assertEquals(100.0, result.blockFirst().getProgress().doubleValue());
    }

}