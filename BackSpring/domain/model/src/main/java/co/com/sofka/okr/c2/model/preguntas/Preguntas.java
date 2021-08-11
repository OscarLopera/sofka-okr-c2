package co.com.sofka.okr.c2.model.preguntas;

import co.com.sofka.okr.c2.model.preguntas.values.Pregunta;
import co.com.sofka.okr.c2.model.preguntas.values.Respuesta;
import co.com.sofka.okr.c2.model.vertical.values.VerticalName;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Preguntas {

    private String id;
    private Pregunta pregunta;
    private Respuesta respuesta;

    public Preguntas() {
    }

    public Preguntas(String id, Pregunta pregunta, Respuesta respuesta) {
        this.id = id;
        this.pregunta = pregunta;
        this.respuesta = respuesta;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Pregunta getPregunta() {
        return pregunta;
    }

    public void setPregunta(Pregunta pregunta) {
        this.pregunta = pregunta;
    }

    public Respuesta getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(Respuesta respuesta) {
        this.respuesta = respuesta;
    }
}
