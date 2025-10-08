const GetInstalledApps = () => {
  const InstalledApps = localStorage.getItem("InstalledApps");
  return InstalledApps ? JSON.parse(InstalledApps) : [];
};

const InstallApp = (id) => {
  const InstalledApps = GetInstalledApps();
  InstalledApps.includes(Number(id))
    ? null
    : localStorage.setItem(
        "InstalledApps",
        JSON.stringify([...InstalledApps, Number(id)])
      );
  return GetInstalledApps();
};

const UninstallApp = (id) => {
  const InstalledApps = GetInstalledApps();
  if (InstalledApps.includes(Number(id))) {
    const UpdatedApps = InstalledApps.filter((appId) => appId !== Number(id));
    localStorage.setItem("InstalledApps", JSON.stringify(UpdatedApps));
  }

  return GetInstalledApps();
};

export { GetInstalledApps, InstallApp, UninstallApp };
