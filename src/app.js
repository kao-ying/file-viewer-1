// Copyright (c) 2017 PlanGrid, Inc.

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from './components/file-viewer';
import sampleHouse from '../example_files/SampleHouse.wexbim';
import solarImage from '../example_files/02-USVI-Solar.jpg';
import png from '../example_files/Vanamo_Logo.png';
import docx from '../example_files/SampleSpec.docx';
import doc from '../example_files/sample.doc';
import csv from '../example_files/Total_Crime.csv';
import mp4 from '../example_files/small.mp4';
import xlsx from '../example_files/SimpleSpreadsheet.xlsx';
import xlsb from '../example_files/SimpleSpreadsheet.xlsb';
import xlsm from '../example_files/SimpleSpreadsheet.xlsm';
import xls from '../example_files/SimpleSpreadsheet.xls';
import xlt from '../example_files/SimpleSpreadsheet.xlt';
import photo360 from '../example_files/360photo.jpg';
import avi from '../example_files/drop.avi';
import webm from '../example_files/small.webm'
import mov from '../example_files/step.mov'
import mp3 from '../example_files/sample.mp3'
import rtf from '../example_files/sample.rtf';
import pdf from '../example_files/sample.pdf';
import mht from '../example_files/SampleSpec.mht'
import htm from '../example_files/SampleSpec.htm'
import txt from '../example_files/SampleSpec.txt'
import xml from '../example_files/SampleSpec2.xml'

ReactDOM.render(
  <FileViewer
    fileType="docx"
    filePath={docx}
  />,
  window.document.getElementById('app')
);
