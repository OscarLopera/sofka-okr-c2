package co.com.sofka.okr.c2.api;

public class RespuestaLoginDTO {
    private Boolean firstTime;
    private String verticalId;
    private String idMongo;

    public RespuestaLoginDTO() {
    }

    public RespuestaLoginDTO(Boolean firstTime, String verticalId, String idMongo) {
        this.firstTime = firstTime;
        this.verticalId = verticalId;
        this.idMongo = idMongo;
    }

    public Boolean getFirstTime() {
        return firstTime;
    }

    public void setFirstTime(Boolean firstTime) {
        this.firstTime = firstTime;
    }

    public String getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(String verticalId) {
        this.verticalId = verticalId;
    }

    public String getIdMongo() {
        return idMongo;
    }

    public void setIdMongo(String idMongo) {
        this.idMongo = idMongo;
    }
}
