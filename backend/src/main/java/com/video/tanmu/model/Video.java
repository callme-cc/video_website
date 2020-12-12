package com.video.tanmu.model;

import java.io.Serializable;

import lombok.Data;

/**
 * video
 *
 * @author
 */
@Data
public class Video implements Serializable {
    private Integer id;

    /**
     * 分类1
     */
    private Integer typeId1;

    private Integer typeId2;

    /**
     * 名称
     */
    private String name;

    /**
     * 图片
     */
    private String picture;

    /**
     * 简介内容
     */
    private String content;
    /**
     * av
     */
    private String av;

    private static final long serialVersionUID = 1L;
}