package co.com.sofka.okr.c2.usecase.okr;

import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
public class GetOkrByIdUseCase {

    private final OKRSRepository repository;

    public Mono<OKRS> execute(String id){
        return  repository.getOkrById(id);
    }

}
