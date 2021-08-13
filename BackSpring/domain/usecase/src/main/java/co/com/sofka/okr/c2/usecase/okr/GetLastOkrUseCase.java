package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class GetLastOkrUseCase {

    private final OKRSRepository repository;

    public Flux<OKRS> execute(String id){
        return repository.getLastOkr(id).switchIfEmpty(Flux.just(new OKRS())).onErrorResume(e-> Flux.just(new OKRS()));
    }
}
