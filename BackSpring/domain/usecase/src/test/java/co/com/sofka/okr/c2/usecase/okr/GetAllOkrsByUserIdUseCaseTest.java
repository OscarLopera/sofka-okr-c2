package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.KRSRepository;
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

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = GetAllOkrsByUserIdUseCase.class)
class GetAllOkrsByUserIdUseCaseTest {

    @MockBean
    private OKRSRepository repository;

    @SpyBean
    private  GetAllOkrsByUserIdUseCase useCase;

    @Test
    public void getAllOkrsByUserIdTest(){
        OKRS okrs = new OKRS(
                IdOkr.of("1"),
                Objective.of("Primer test"),
                Title.of("Si se puede"),
                "14",
                Description.of("Estamos en eso"),
                VerticalId.of("21"),
                100.0
        );

        Mockito.when(repository.getAllOkrByUserId("1")).thenReturn(Flux.just(okrs));
        Flux<OKRS> response = useCase.execute("1");
        Assertions.assertEquals("14", response.blockFirst().getManagerId());
        Assertions.assertEquals("21", response.blockFirst().getVerticalId().getValue());
    }
}