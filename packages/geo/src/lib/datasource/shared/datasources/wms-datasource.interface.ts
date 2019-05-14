import olSourceImageWMS from 'ol/source/ImageWMS';

import { DataSourceOptions } from './datasource.interface';
import { WFSDataSourceOptionsParams } from './wfs-datasource.interface';
import { MetadataOptions } from '../../../metadata/shared/metadata.interface';

export interface WMSDataSourceOptions extends DataSourceOptions {
  // type?: 'wms';
  optionsFromCapabilities?: boolean;
  paramsWFS?: WFSDataSourceOptionsParams; // for wms linked with wfs
  urlWfs?: string; // if url for linked wfs differ from the url for wms.
  url: string;
  params: WMSDataSourceOptionsParams;
  projection?: string;
  resolutions?: number[];
  serverType?: string;
  ratio?: number;
  ol?: olSourceImageWMS;
  refreshIntervalSec?: number;
  _layerOptionsFromCapabilities?: WMSLayerOptionsFromCapabilities;
}

export interface WMSDataSourceOptionsParams {
  layers: string;
  version?: string;
  time?: string;
}

export interface WMSLayerOptionsFromCapabilities {
  title?: string;
  minResolution?: number;
  maxResolution?: string;
  metadata?: MetadataOptions;
}