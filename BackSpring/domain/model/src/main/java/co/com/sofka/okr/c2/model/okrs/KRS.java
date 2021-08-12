package co.com.sofka.okr.c2.model.okrs;

import co.com.sofka.okr.c2.model.okrs.values.Description;
import co.com.sofka.okr.c2.model.okrs.values.IdOkr;
import co.com.sofka.okr.c2.model.okrs.values.KRId;
import co.com.sofka.okr.c2.model.okrs.values.Title;
import co.com.sofka.okr.c2.model.usuarios.values.Email;

public class KRS {
    private KRId krId;
    private IdOkr idOkr;
    private Title title;
    private Description description;
    private String managerName;
    private Email managerEmail;
    private String startDate;
    private String endDate;
    private Double loadValue;
    private Double progress;

    public KRS() {
    }

    public KRS( KRId krId, IdOkr idOkr, Title title, Description description, String managerName, Email managerEmail, String startDate, String endDate, Double loadValue, Double progress) {
        this.krId = krId;
        this.idOkr = idOkr;
        this.title = title;
        this.description = description;
        this.managerName = managerName;
        this.managerEmail = managerEmail;
        this.startDate = startDate;
        this.endDate = endDate;
        this.loadValue = loadValue;
        this.progress = progress;
    }


    public KRId getKrId() {
        return krId;
    }

    public void setKrId(KRId krId) {
        this.krId = krId;
    }

    public IdOkr getIdOkr() {
        return idOkr;
    }

    public void setIdOkr(IdOkr idOkr) {
        this.idOkr = idOkr;
    }

    public Title getTitle() {
        return title;
    }

    public void setTitle(Title title) {
        this.title = title;
    }

    public Description getDescription() {
        return description;
    }

    public void setDescription(Description description) {
        this.description = description;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public Email getManagerEmail() {
        return managerEmail;
    }

    public void setManagerEmail(Email managerEmail) {
        this.managerEmail = managerEmail;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Double getLoadValue() {
        return loadValue;
    }

    public void setLoadValue(Double loadValue) {
        this.loadValue = loadValue;
    }

    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }
}
