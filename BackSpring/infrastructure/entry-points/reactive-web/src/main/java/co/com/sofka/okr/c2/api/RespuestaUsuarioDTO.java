package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.OKRS;

import java.util.List;

public class RespuestaUsuarioDTO {

    private String id;
    private String name;
    private List<OKRS> okrs;

    public RespuestaUsuarioDTO(String id, String name, List<OKRS> okrs) {
        this.id = id;
        this.name = name;
        this.okrs = okrs;
    }

    public RespuestaUsuarioDTO() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<OKRS> getOkrs() {
        return okrs;
    }

    public void setOkrs(List<OKRS> okrs) {
        this.okrs = okrs;
    }
}
