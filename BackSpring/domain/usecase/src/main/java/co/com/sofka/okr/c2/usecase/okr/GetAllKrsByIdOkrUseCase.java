package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.gateways.KRSRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@RequiredArgsConstructor
public class GetAllKrsByIdOkrUseCase {

    private final KRSRepository repository;

    public Flux<KRS> execute(String id){
        return repository.listKr(id).onErrorResume(e-> Flux.just(new KRS()));
    }

}
