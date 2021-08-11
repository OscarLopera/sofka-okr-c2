package co.com.sofka.okr.c2.api;

public class RespuestaLoginDTO {
    private Boolean firstTime;
    private String verticalId;

    public RespuestaLoginDTO() {
    }

    public RespuestaLoginDTO(Boolean firstTime, String verticalId) {
        this.firstTime = firstTime;
        this.verticalId = verticalId;
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
}
