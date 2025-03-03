"use client";

import Banner from "@/components/Banner";
import OrdersReport from "@/components/OrdersReport";
import { useState } from "react";

import LoadingOverlay from "@/components/LoadingOverlay";

export default function Home() {

  // --------------------------- event handlers
  const showOrders = (e:any) => setAppState(2);

  // --------------------------- state variables
  // (1) - no orders
  // (2) - orders are loading
  // (3) - orders have been loaded

  const [appState, setAppState] = useState(1);

  // ---------------------------- rendering to DOM
  return (
    <main className="grid grid-rows-1 grid-cols-1 gap-0 text-content">

      <LoadingOverlay show={appState == 2} bgColor="#b82308" />

      <Banner />

      <aside className="flex flex-nowrap items-center justify-between p-5 flex-col md:flex-row">
        <div className="mb-5 md:hidden text-center">
          <>1234 Cheesy Drive | Tastyville, NS | 902-123-4567</>
        </div>
        <div>
          <div className="text-accent text-3xl font-bold mb-2.5">Welcome loyal pizza dispatcher....</div>Click the &quot;Get Orders&quot; button below to view all current orders that need to be delivered.
          <div>
              <button 
                className="bg-accent border-none rounded-md p-2.5 text-white hover:bg-greyContent mt-5"
                onClick={showOrders}>
                  Get Orders
                </button>
          </div>
        </div>
        <div className="shrink-0 text-lg text-right text-greyContent hidden md:block">
          <div>Antonio&apos;s Pizzaria</div>
          <div>1234 Cheesy Drive</div>
          <div>Tastyville, NS</div>
          <div>902-123-4567</div>
        </div>
      </aside>

      <div className="bg-greyAccent p-10">

        <div id="output" className="divide-dashed divide-y-2 divide-accent">

          <OrdersReport setAppState={setAppState} appState={appState} />

        </div>
      </div>
    </main>
  );
}