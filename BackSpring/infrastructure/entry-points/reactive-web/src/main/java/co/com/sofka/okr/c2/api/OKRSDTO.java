package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.values.HistoricalProgress;

import java.util.List;

public class OKRSDTO {

    private String id;
    private String objective;
    private String title;
    private String managerId;
    private String description;
    private String verticalId;
    private Double currentProgress;
    private List<HistoricalProgress> historicalProgress;
    private List<KRDTO> krs;

    public OKRSDTO(String id, String objective, String title, String managerId, String description, String verticalId, Double currentProgress, List<HistoricalProgress> historicalProgress, List<KRDTO> krs) {
        this.id = id;
        this.objective = objective;
        this.title = title;
        this.managerId = managerId;
        this.description = description;
        this.verticalId = verticalId;
        this.currentProgress = currentProgress;
        this.historicalProgress = historicalProgress;
        this.krs = krs;
    }

    public OKRSDTO() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(String verticalId) {
        this.verticalId = verticalId;
    }

    public Double getCurrentProgress() {
        return currentProgress;
    }

    public void setCurrentProgress(Double currentProgress) {
        this.currentProgress = currentProgress;
    }

    public List<HistoricalProgress> getHistoricalProgress() {
        return historicalProgress;
    }

    public void setHistoricalProgress(List<HistoricalProgress> historicalProgress) {
        this.historicalProgress = historicalProgress;
    }

    public List<KRDTO> getKrs() {
        return krs;
    }

    public void setKrs(List<KRDTO> krs) {
        this.krs = krs;
    }
}
