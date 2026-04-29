import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/segmentos")({
  component: SegmentsLayout,
});

function SegmentsLayout() {
  return <Outlet />;
}
