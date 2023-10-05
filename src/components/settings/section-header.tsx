export const SettingsSectionHeader = ({ title }: { title: string }) => {
  const { t } = { t: (t: string) => t };
  // const { t } = useTranslation();

  return (
    <h3 className="text-sm text-muted-foreground font-semibold">{t(title)}</h3>
  );
};
