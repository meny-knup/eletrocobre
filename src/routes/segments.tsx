import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/segments")({
  component: SegmentsLayout,
});

function SegmentsLayout() {
  return <Outlet />;
}
