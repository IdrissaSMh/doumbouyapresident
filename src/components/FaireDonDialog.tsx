import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Smartphone, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FaireDonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FaireDonDialog = ({ open, onOpenChange }: FaireDonDialogProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié !",
      description: `${label} copié dans le presse-papiers`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            FAIRE UN DON
          </DialogTitle>
          <DialogDescription>
            Votre contribution financière nous aide à mener à bien nos actions pour le développement de la Guinée.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-semibold text-foreground">Virement Bancaire</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Nom du compte</p>
                        <p className="font-medium">Alliance Doumbouya Président</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Numéro de compte</p>
                        <p className="font-medium">GN00 0000 0000 0000 0000</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard("GN00 0000 0000 0000 0000", "Numéro de compte")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div>
                        <p className="text-xs text-muted-foreground">Banque</p>
                        <p className="font-medium">Banque de Guinée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-secondary/10 p-3">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-semibold text-foreground">Mobile Money</h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">Orange Money</p>
                        <p className="font-medium">+224 628 60 66 75</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard("+224 628 60 66 75", "Numéro Orange Money")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground">MTN Mobile Money</p>
                        <p className="font-medium">+224 624 37 21 24</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard("+224 624 37 21 24", "Numéro MTN")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg bg-accent/10 p-4">
            <p className="text-sm text-foreground">
              <strong>Note importante :</strong> Après avoir effectué votre don, veuillez nous contacter au{" "}
              <span className="font-semibold">+224 628 60 66 75</span> pour confirmer votre contribution. 
              Votre générosité contribue directement au succès de nos actions.
            </p>
          </div>

          <Button
            onClick={() => onOpenChange(false)}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FaireDonDialog;
