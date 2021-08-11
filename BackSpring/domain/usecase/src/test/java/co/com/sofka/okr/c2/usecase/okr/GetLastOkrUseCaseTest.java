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
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = GetLastOkrUseCaseTest.class)
class GetLastOkrUseCaseTest {

    @MockBean
    private OKRSRepository repository;

    @SpyBean
    private GetLastOkrUseCase useCase;

    @Test
    public void getLastOkrTest(){
        OKRS okrs = new OKRS(
                IdOkr.of("1"),
                Objective.of("Primer test"),
                Title.of("Si se puede"),
                "14",
                Description.of("Estamos en eso"),
                VerticalId.of("21"),
                100.0
        );

        Mockito.when(repository.getLastOkr(Mockito.any(String.class))).thenReturn(Flux.just(okrs));

        Flux<OKRS> response= useCase.execute("123");
        Assertions.assertEquals("Primer test",response.blockLast().getObjective().getValue());
    }

}