package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@RequiredArgsConstructor
public class GetAllOkrsByUserIdUseCase {

    private final OKRSRepository repository;

    public Flux<OKRS> execute (String id){
        return repository.getAllOkrByUserId(id);
    }
}
