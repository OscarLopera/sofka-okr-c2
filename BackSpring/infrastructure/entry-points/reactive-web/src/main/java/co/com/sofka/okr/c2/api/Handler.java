package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.usecase.okr.GetAllKrsByIdOkrUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOkrByIdUseCase;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class Handler {

    private final MapperOKRDTO mapperOKRDTO;
    private final GetOkrByIdUseCase getOkrByIdUseCase;
    private final GetAllKrsByIdOkrUseCase getAllKrsByIdOkrUseCase;

    public Mono<OKRSDTO> getOkrBiId(String id) {
        Mono<OKRSDTO> okr = getOkrByIdUseCase.execute(id).map(mapperOKRDTO.okrToDto());
        Flux<OKRSDTO> response = getAllKrsByIdOkrUseCase.execute(id).defaultIfEmpty(new KRS()).buffer().flatMap(it -> okr.flatMap(list -> {
            if(it.get(0).getIdOkr() == null){
                list.setKrs(new ArrayList<>());
            }else{
                list.setKrs(it.stream().map(mapperOKRDTO.krToDto()).collect(Collectors.toList()));
            }
            return Mono.just(list);
        }));
        return response.next();
    }

    public Mono<ServerResponse> listenGETOtherUseCase(ServerRequest serverRequest) {
        // useCase2.logic();
        return ServerResponse.ok().body("", String.class);
    }

    public Mono<ServerResponse> listenPOSTUseCase(ServerRequest serverRequest) {
        // usecase.logic();
        return ServerResponse.ok().body("", String.class);
    }
}
