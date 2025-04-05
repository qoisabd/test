import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { OrderHistoryType } from "@/types/types";
import { StatusBadge } from "./StatusBadge";
import { OrderPDFGenerator } from "./OrderPdfGenerator";

interface OrderDetailModalProps {
  order: OrderHistoryType | null;
  isOpen: boolean;
  onClose: () => void;
}

export function OrderDetailModal({
  order,
  isOpen,
  onClose,
}: OrderDetailModalProps) {
  const handleComplain = () => {
    const message = encodeURIComponent(
      `Halo admin, saya butuh bantuan dengan nomor pesanan ${order?.or_platform_id}`
    );
    window.open(`https://wa.me/6285195300828?text=${message}`, "_blank");
  };

  const handleExportPDF = async () => {
    if (!order) return;
    try {
      const pdfGenerator = new OrderPDFGenerator(order);
      await pdfGenerator.generate();
      alert("PDF berhasil diexport!");
    } catch (error) {
      console.error("Error saat mengekspor PDF:", error);
      alert("Fitur belum tersedia.");
    }
  };

  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Detail Pesanan #{order.or_platform_id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Tanggal Pesanan</p>
              <p className="font-medium">
                {new Date(order.or_created_at).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Pembayaran</p>
              <p className="font-medium uppercase">
                {order.or_payment_type || "-"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <StatusBadge status={order.or_status} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Produk</h3>
            <div className="space-y-2">
              {Array.isArray(order?.orderItem?.oi_product) && order.orderItem.oi_product.length > 0 ? (
                order.orderItem.oi_product.map((product) => (
                  <div
                    key={`${product.id}-${product.name}`}
                    className="flex flex-col p-4 bg-muted rounded-lg space-y-2"
>
                    <div className="flex justify-between">
                      <p className="font-medium text-lg">{product.name}</p>
                      <p className="font-medium text-right">
                        Rp. {(product.price * product.quantity).toFixed(0)}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {product.category_name && (
                        <p>Nama Game: {product.category_name}</p>
                      )}
                      {product.account_name && (
                        <p>ID Akun: {product.account_name} ({product.account_id})</p>
                      )}
                      {product.order_email && (
                        <p>Email: {product.order_email}</p>
                      )}
                      {product.type && (
                        <p>Tipe Produk: {product.type}</p>
                      )}
                      <p>Jumlah: {product.quantity} x Rp. {product.price.toFixed(0)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col p-4 bg-muted rounded-lg space-y-2">
                  <p className="font-medium text-lg">Diamond Mobile Legends</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <p className="font-semibold">Total Bayar</p>
              <p className="text-xl font-bold">
                Rp. {order.or_total_amount.toFixed(0)}
              </p>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleComplain} variant="secondary">
                Butuh Bantuan?
              </Button>
              <Button onClick={handleExportPDF}>Export PDF</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
