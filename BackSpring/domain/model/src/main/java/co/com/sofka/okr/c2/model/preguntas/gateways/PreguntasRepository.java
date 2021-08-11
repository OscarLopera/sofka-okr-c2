package co.com.sofka.okr.c2.model.preguntas.gateways;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.values.Pregunta;
import reactor.core.publisher.Flux;

public interface PreguntasRepository {

    Flux<Preguntas> listPreguntas();

}
