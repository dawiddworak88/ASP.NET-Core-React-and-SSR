#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
ENV ASPNETCORE_URLS="https://+;http://+"
ENV ASPNETCORE_Kestrel__Certificates__Default__Path="./cert-aspnetcore.pfx"

WORKDIR /app
COPY --from=build-env /app/out .
COPY cert-aspnetcore.pfx .

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "AspNetCore.dll"]