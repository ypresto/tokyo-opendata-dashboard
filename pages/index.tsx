import type { NextPage } from "next";
import Head from "next/head";
import { useState, useCallback, useEffect, useMemo } from "react";
import MapGL, { Marker, Layer, LayerProps, Source } from "react-map-gl";
import { PieChart } from "react-minimal-pie-chart";

const layerStyle: LayerProps = {
  id: "my-layer",
  type: "fill",
  paint: {
    "fill-color": "#007cbf",
  },
};

const CustomPieChart = ({ data }: { data: PieChartData[] }) => {
  return <PieChart data={data} radius={5} center={[5, 5]} startAngle={270} />;
};

type PieChartData = {
  title: string;
  value: number;
  color: string;
};

type PieChartMarker = {
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  data: PieChartData[];
};

type OpendataStatus = {
  code: string;
  exists: number;
  none: number;
  all: number;
};

const Home: NextPage = () => {
  const [areaData, setAreaData] = useState<PieChartMarker[]>([]);
  const [statusData, setStatusData] = useState<OpendataStatus[] | undefined>(
    undefined
  );
  const [geoJSONData, setGeoJSONData] = useState(undefined);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    longitude: 139.52197653435175,
    latitude: 35.7918012662416,
    zoom: 9,
  });

  useEffect(() => {
    const fetchStatusData = async () => {
      // load opendata status
      const res = await fetch("/tokyo-opendata-dashboard/opendata_status.csv");
      const text = await res.text();
      const lines = text.split("\n");
      const newStatusData = lines.map((l) => {
        const row = l.split(",");
        return {
          code: row[1],
          exists: +row[2],
          none: +row[3],
          all: +row[2] + +row[3],
        };
      });
      setStatusData(newStatusData);
    };
    fetchStatusData();
  }, []);

  useEffect(() => {
    const fetchAreaData = async () => {
      // load tokyo office
      const res1 = await fetch("/tokyo-opendata-dashboard/tokyo_office.csv");
      const text1 = await res1.text();
      const lines1 = text1.split("\n");
      const newAreaData = lines1.map((l) => {
        const row = l.split(",");
        const areaPieMarker: PieChartMarker = {
          code: row[0],
          name: row[1],
          longitude: +row[2],
          latitude: +row[3],
          data: [],
        };
        // 市区町村ごとのオープンデータの状況をマージする
        const status = statusData?.filter((s) => {
          return s.code === areaPieMarker.code;
        });
        if (status && status.length > 0) {
          const exists = status[0].exists;
          const none = status[0].none;
          areaPieMarker.data = [
            { title: "exists", value: exists, color: "#0000ff" },
            { title: "none", value: none, color: "#ff0000" },
          ];
        }

        return areaPieMarker;
      });
      setAreaData(newAreaData);
    };

    fetchAreaData();
  }, [statusData]);

  const loadGeoJSONData = (newData: any) => {
    setGeoJSONData(newData);
  };

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("./tokyo-opendata-dashboard/japan_tokyo.json");
      const json = await res.json();
      loadGeoJSONData(json);
    };
    fetcher();
  }, []);

  const onViewportChange = useCallback(async (viewport) => {
    setViewport(viewport);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>東京都オープンデータダッシュボード</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="map">
        <MapGL
          {...viewport}
          mapStyle="https://raw.githubusercontent.com/geolonia/notebook/master/style.json"
          onViewportChange={onViewportChange}
        >
          {geoJSONData && false && (
            <Source type="geojson" data={geoJSONData}>
              <Layer {...layerStyle} />
            </Source>
          )}
          {areaData.map((office: any, i: number) => (
            <Marker
              key={i}
              latitude={office.latitude}
              longitude={office.longitude}
              offsetLeft={-10}
              offsetTop={-10}
            >
              <CustomPieChart data={office.data} />
            </Marker>
          ))}
        </MapGL>
      </div>

      <style jsx>{`
        .container,
        #map {
          height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;