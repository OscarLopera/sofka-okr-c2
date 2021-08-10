package co.com.sofka.okr.c2.mongo.entities;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.values.HistoricalProgress;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "okrs")
public class OKREntity {
    @Id
    private String id;
    private String objective;
    private String title;
    private String managerId;
    private  String verticalId;
    private String description;
    private String areaInCharge;
    private Double progress;
    private List<HistoricalProgress> historicalProgress;


    public OKREntity() {
    }

    public OKREntity(String id, String objective, String title, String managerId, String verticalId, String description, String areaInCharge, Double progress, List<HistoricalProgress> historicalProgress) {
        this.id = id;
        this.objective = objective;
        this.title = title;
        this.managerId = managerId;
        this.verticalId = verticalId;
        this.description = description;
        this.areaInCharge = areaInCharge;
        this.progress = progress;
        this.historicalProgress = historicalProgress;

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

    public String getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(String verticalId) {
        this.verticalId = verticalId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAreaInCharge() {
        return areaInCharge;
    }

    public void setAreaInCharge(String areaInCharge) {
        this.areaInCharge = areaInCharge;
    }

    public Double getProgress() {
        return progress;
    }

    public void setProgress(Double progress) {
        this.progress = progress;
    }

    public List<HistoricalProgress> getHistoricalProgress() {
        return historicalProgress;
    }

    public void setHistoricalProgress(List<HistoricalProgress> historicalProgress) {
        this.historicalProgress = historicalProgress;
    }


}
