package co.com.sofka.okr.c2.mongo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Krs")
public class KREntity {
    @Id
    private String id;
    private String idOkr;
    private String title;
    private String description;
    private String managerName;
    private String managerEmail;
    private String startDate;
    private String endDate;
    private Double loadValue;
    private Double progress;

    public KREntity() {
    }

    public KREntity(String id, String idOkr, String title, String description, String managerName, String managerEmail, String startDate, String endDate, Double loadValue, Double progress) {
        this.id = id;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdOkr() {
        return idOkr;
    }

    public void setIdOkr(String idOkr) {
        this.idOkr = idOkr;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getManagerEmail() {
        return managerEmail;
    }

    public void setManagerEmail(String managerEmail) {
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
