"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import SearchTransaction from "./SearchTransaction";
import { fetchAllOrder } from "@/features/admin/adminThunk";
// import { StatusBadge } from "../StatusBadge";
import { Alert, AlertDescription } from "../ui/alert";
import { Skeleton } from "../ui/skeleton";

export default function TransactionDataTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.adminAllOrderReducer
  );

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);

  if (status === "LOADING") {
    return (
      <div className="container mx-auto py-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-[400px] w-full" />
        </div>
      </div>
    );
  }

  if (status === "FAILED") {
    return (
      <div className="container mx-auto py-8">
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <section className="bg-gradient-detail">
      <SearchTransaction onSearch={() => {}} />
      <div className="mt-5 px-4 md:px-32 pb-10">
        <h2 className="text-xl text-white">Semua pesanan masuk</h2>
        <p className="mt-2 max-w-2xl text-sm text-gray-200">
        Ini semua adalah transaksi dari semua pengguna, 
        Informasi yang tersedia meliputi tanggal transaksi, 
        kode faktur, nomor ponsel, harga, dan status.
        </p>
      </div>
    </section>
  );
}
