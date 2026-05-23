package com.google.android.material.shape;
@Deprecated
public class ShapePathModel extends ShapeAppearanceModel {
    @Deprecated
    public void setAllCorners(CornerTreatment cornerTreatment) {
        this.topLeftCorner = cornerTreatment;
        this.topRightCorner = cornerTreatment;
        this.bottomRightCorner = cornerTreatment;
        this.bottomLeftCorner = cornerTreatment;
    }

    @Deprecated
    public void setAllEdges(EdgeTreatment edgeTreatment) {
        this.leftEdge = edgeTreatment;
        this.topEdge = edgeTreatment;
        this.rightEdge = edgeTreatment;
        this.bottomEdge = edgeTreatment;
    }

    @Deprecated
    public void setCornerTreatments(CornerTreatment cornerTreatment, CornerTreatment cornerTreatment2, CornerTreatment cornerTreatment3, CornerTreatment cornerTreatment4) {
        this.topLeftCorner = cornerTreatment;
        this.topRightCorner = cornerTreatment2;
        this.bottomRightCorner = cornerTreatment3;
        this.bottomLeftCorner = cornerTreatment4;
    }

    @Deprecated
    public void setEdgeTreatments(EdgeTreatment edgeTreatment, EdgeTreatment edgeTreatment2, EdgeTreatment edgeTreatment3, EdgeTreatment edgeTreatment4) {
        this.leftEdge = edgeTreatment;
        this.topEdge = edgeTreatment2;
        this.rightEdge = edgeTreatment3;
        this.bottomEdge = edgeTreatment4;
    }

    @Deprecated
    public void setTopLeftCorner(CornerTreatment cornerTreatment) {
        this.topLeftCorner = cornerTreatment;
    }

    @Deprecated
    public void setTopRightCorner(CornerTreatment cornerTreatment) {
        this.topRightCorner = cornerTreatment;
    }

    @Deprecated
    public void setBottomRightCorner(CornerTreatment cornerTreatment) {
        this.bottomRightCorner = cornerTreatment;
    }

    @Deprecated
    public void setBottomLeftCorner(CornerTreatment cornerTreatment) {
        this.bottomLeftCorner = cornerTreatment;
    }

    @Deprecated
    public void setTopEdge(EdgeTreatment edgeTreatment) {
        this.topEdge = edgeTreatment;
    }

    @Deprecated
    public void setRightEdge(EdgeTreatment edgeTreatment) {
        this.rightEdge = edgeTreatment;
    }

    @Deprecated
    public void setBottomEdge(EdgeTreatment edgeTreatment) {
        this.bottomEdge = edgeTreatment;
    }

    @Deprecated
    public void setLeftEdge(EdgeTreatment edgeTreatment) {
        this.leftEdge = edgeTreatment;
    }
}

