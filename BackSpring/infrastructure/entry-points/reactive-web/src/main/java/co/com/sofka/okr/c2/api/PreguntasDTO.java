package co.com.sofka.okr.c2.api;

public class PreguntasDTO {
    private String id;
    private String pregunta;
    private String respuesta;

    public PreguntasDTO() {
    }

    public PreguntasDTO(String id, String pregunta, String respuesta) {
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

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }
}
