package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.usecase.okr.GetAllOKRByUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetUserOKRUseCase;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class Handler {

    private final GetUserOKRUseCase getUserOKRUseCase;
    private final GetAllOKRByUserUseCase getAllOKRByUserUseCase;
    private final MapperOKRDTO mapperOKRDTO;
    private final MapperUserDTO mapperUserDTO;

    public Mono<RespuestaUsuarioDTO> findUserAllOkr(String id){
        Mono<RespuestaUsuarioDTO> user = getUserOKRUseCase.execute(id).map(mapperUserDTO.userResponseToDTO());
        Flux<RespuestaUsuarioDTO> response = getAllOKRByUserUseCase.execute(id).buffer()
                .flatMap(it -> user.flatMap(okr -> {
                    okr.setOkrs(it);
                    val okr2 = okr;
                    return Mono.just(okr2);
                }));
        return response.next();
    }



}
