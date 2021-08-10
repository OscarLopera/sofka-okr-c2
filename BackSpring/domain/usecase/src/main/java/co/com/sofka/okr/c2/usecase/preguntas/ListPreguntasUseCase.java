package co.com.sofka.okr.c2.usecase.preguntas;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.gateways.PreguntasRepository;
import co.com.sofka.okr.c2.model.vertical.Vertical;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@RequiredArgsConstructor
public class ListPreguntasUseCase {

    private final PreguntasRepository preguntasRepository;

    public Flux<Preguntas> execute(){
        return preguntasRepository.listPreguntas();
    }
}
