package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.preguntas.Preguntas;
import co.com.sofka.okr.c2.model.preguntas.values.Pregunta;
import co.com.sofka.okr.c2.model.preguntas.values.Respuesta;
import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperPreguntasDTO {

    public Function<Preguntas,PreguntasDTO> toDTO(){
        return preguntas -> new PreguntasDTO(
                preguntas.getId(),
                preguntas.getPregunta().getValue(),
                preguntas.getRespuesta().getValue()
        );
    }

    public Function<PreguntasDTO,Preguntas> UserToDTO(){
        return preguntasDTO -> new Preguntas(
                preguntasDTO.getId(),
                new Pregunta(preguntasDTO.getPregunta()),
                new Respuesta(preguntasDTO.getRespuesta())
        );
    }
}
