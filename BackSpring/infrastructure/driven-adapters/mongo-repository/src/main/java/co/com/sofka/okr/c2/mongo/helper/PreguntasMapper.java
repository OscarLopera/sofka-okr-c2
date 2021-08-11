package co.com.sofka.okr.c2.mongo.helper;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.values.Pregunta;
import co.com.sofka.okr.c2.model.preguntas.values.Respuesta;
import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import co.com.sofka.okr.c2.mongo.entities.PreguntasEntity;
import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;

import java.util.function.Function;

public class PreguntasMapper {
    public Function<PreguntasEntity, Preguntas> fromPreguntasEntity() {
        return newEntity -> new Preguntas(
                newEntity.getId(),
                new Pregunta(newEntity.getPregunta()),
                new Respuesta(newEntity.getRespuesta())
        );
    }

    public Function<Preguntas,PreguntasEntity> fromPreguntas(){
        return newPreguntas->new PreguntasEntity(
                newPreguntas.getId(),
                newPreguntas.getPregunta().getValue(),
                newPreguntas.getRespuesta().getValue()
        );
    }
}
